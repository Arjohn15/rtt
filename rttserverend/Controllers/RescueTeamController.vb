Imports System.Web.Http
Imports System.Data.SqlClient

Public Class RescueTeamController
    Inherits ApiController

    Private connectionString As String = "Server=LAPTOP-Q4HT0K8V\RTTSERVEREND;Database=Reqs;User Id=sa;Password=gregarsh12345;"

    ' GET: api/RescueTeam
    <HttpGet>
    Public Function GetUsersData() As IHttpActionResult
        Dim teams As New List(Of Object)()

        Using connection As New SqlConnection(connectionString)
            Dim query As String = "SELECT * FROM Reqs.dbo.ReqsInfo"
            Dim command As New SqlCommand(query, connection)

            connection.Open()
            Dim reader As SqlDataReader = command.ExecuteReader()

            While reader.Read()
                teams.Add(New With {
                    .user_name = reader("user_name"),
                    .user_phoneNumber = reader("user_phoneNumber"),
                    .user_additionalDescription = reader("user_additionalDescription"),
                    .location = reader("location"),
                    .needsIDs = reader("needsIDs"),
                    .others = reader("others")
                })
            End While

            reader.Close()
        End Using

        Return Ok(teams)
    End Function

    ' POST: api/RescueTeam
    <HttpPost>
    Public Function CreateUserInfo(<FromBody> user As Object) As IHttpActionResult
        Using connection As New SqlConnection(connectionString)
            Dim query As String = "INSERT INTO Reqs.dbo.ReqsInfo (user_name, user_phoneNumber, user_additionalDescription, location, needsIDs, others) VALUES (@Name, @PhoneNumber, @AdditionalDescription, @Location, @NeedsIDs, @Others)"
            Dim command As New SqlCommand(query, connection)
            'command.Parameters.AddWithValue("@Name", "Johnnny")
            'command.Parameters.AddWithValue("@PhoneNumber", "0912345678")
            'command.Parameters.AddWithValue("@AdditionalDescription", "John's additional desc")
            'command.Parameters.AddWithValue("@Location", "dsadasdsa")
            'command.Parameters.AddWithValue("@NeedsIDs", "[medical-10]") ' Convert list to comma-separated string
            'command.Parameters.AddWithValue("@Others", "User's other needs")

            'command.Parameters.AddWithValue("@Name", user.user_name)
            'command.Parameters.AddWithValue("@PhoneNumber", user.user_phoneNumber)
            'command.Parameters.AddWithValue("@AdditionalDescription", user.user_additionalDescription)
            'command.Parameters.AddWithValue("@Location", user.location)
            'command.Parameters.AddWithValue("@NeedsIDs", String.Join(",", user.needsIDs)) ' Convert list to comma-separated string
            'command.Parameters.AddWithValue("@Others", user.others)

            connection.Open()
            Dim rowsAffected As Integer = command.ExecuteNonQuery()

            If rowsAffected > 0 Then
                Return Ok("Team created successfully.")
            Else
                Return BadRequest("Failed to create team.")
            End If
        End Using
    End Function

    ' PUT: api/RescueTeam/5
    <HttpPut>
    Public Function UpdateTeam(id As Integer, <FromBody> team As Object) As IHttpActionResult
        Using connection As New SqlConnection(connectionString)
            Dim query As String = "UPDATE RescueTeams SET Name = @Name, Location = @Location WHERE Id = @Id"
            Dim command As New SqlCommand(query, connection)
            command.Parameters.AddWithValue("@Name", team.Name)
            command.Parameters.AddWithValue("@Location", team.Location)
            command.Parameters.AddWithValue("@Id", id)

            connection.Open()
            Dim rowsAffected As Integer = command.ExecuteNonQuery()

            If rowsAffected > 0 Then
                Return Ok("Team updated successfully.")
            Else
                Return NotFound()
            End If
        End Using
    End Function

    ' DELETE: api/RescueTeam/5
    <HttpDelete>
    Public Function DeleteTeam(id As Integer) As IHttpActionResult
        Using connection As New SqlConnection(connectionString)
            Dim query As String = "DELETE FROM RescueTeams WHERE Id = @Id"
            Dim command As New SqlCommand(query, connection)
            command.Parameters.AddWithValue("@Id", id)

            connection.Open()
            Dim rowsAffected As Integer = command.ExecuteNonQuery()

            If rowsAffected > 0 Then
                Return Ok("Team deleted successfully.")
            Else
                Return NotFound()
            End If
        End Using
    End Function
End Class
