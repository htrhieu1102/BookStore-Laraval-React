<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request) {
        $credentails = $request->validated();
        if (!Auth::attempt($credentails)) {
            return response([
                'message'=> 'Email or Password is incorrect'
            ]);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
    public function signup(SignupRequest $request) {
        $data = $request->validated();
        try {
            /** @var User */
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);

            $token = $user->createToken('main')->plainTextToken;

            return response(compact('user', 'token'));
        } catch (\Exception $e) {
            // Bắt lỗi và trả về thông báo lỗi
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }
    public function logout(Request $request) {
        /** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete;
        return response('', 204);
    }
}
