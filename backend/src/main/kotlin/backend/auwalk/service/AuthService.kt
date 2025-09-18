package backend.auwalk.service

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.gson.GsonFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.stereotype.Service

@Service
class AuthService(
    private val jdbcTemplate: JdbcTemplate,

    // Pega o clientId diretamente do application.properties
    @Value("\${google.client-id}") private val clientId: String
) {

    fun autenticar(email: String, senha: String): Boolean {
        val sql = "SELECT senha FROM usuario WHERE email = ?"
        val senhaDb = try {
            jdbcTemplate.queryForObject(sql, arrayOf(email), String::class.java)
        } catch (e: Exception) {
            return false
        }
        return senhaDb == senha
    }

    fun autenticarComGoogle(idTokenString: String): Boolean {
        val verifier = GoogleIdTokenVerifier.Builder(NetHttpTransport(), GsonFactory())
            .setAudience(listOf(clientId))  // usa a variável injetada
            .build()

        val idToken: GoogleIdToken? = verifier.verify(idTokenString)
        if (idToken != null) {
            val payload = idToken.payload
            val email = payload.email
            val nome = payload["name"]?.toString() ?: "Usuário"

            // Verifica se o usuário já existe
            val sql = "SELECT COUNT(*) FROM usuario WHERE email = ?"
            val count = jdbcTemplate.queryForObject(sql, arrayOf(email), Int::class.java) ?: 0

            if (count == 0) {
                // Cria o usuário automaticamente no banco
                val insertSql = "INSERT INTO usuario (nome, email, senha, telefone) VALUES (?, ?, ?, ?)"
                jdbcTemplate.update(insertSql, nome, email, "", "")
            }

            return true
        }
        return false
    }
}