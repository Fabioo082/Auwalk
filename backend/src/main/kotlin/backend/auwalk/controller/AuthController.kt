package backend.auwalk.controller


import org.springframework.web.bind.annotation.*
import backend.auwalk.service.AuthService

data class LoginRequest(val email: String, val senha: String)
data class GoogleLoginRequest(val token: String)

@RestController
@RequestMapping("/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/login")
    fun login(@RequestBody request: LoginRequest): Boolean {
        return authService.autenticar(request.email, request.senha)
    }
    @PostMapping("/google")
    fun loginGoogle(@RequestBody request: GoogleLoginRequest): Boolean {
        return authService.autenticarComGoogle(request.token)
    }
}