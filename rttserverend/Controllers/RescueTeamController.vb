Imports System.Web.Http
Imports System.Data.SqlClient
Imports Newtonsoft.Json.Linq
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
        ' Cast the received user object to JObject
        Dim userData As JObject = CType(user, JObject)

        ' Extract values from the JObject
        Dim userName As String = userData("user_name").ToString()
        Dim phoneNumber As String = userData("user_phoneNumber").ToString()
        Dim additionalDescription As String = userData("user_additionalDescription").ToString()
        Dim location As String = userData("location").ToString()
        Dim needsIDs As String = String.Join(",", userData("needsIDs").ToObject(Of List(Of String))())
        Dim others As String = userData("others").ToString()

        Using connection As New SqlConnection(connectionString)
            Dim query As String = "INSERT INTO Reqs.dbo.ReqsInfo (user_name, user_phoneNumber, user_additionalDescription, location, needsIDs, others) VALUES (@Name, @PhoneNumber, @AdditionalDescription, @Location, @NeedsIDs, @Others)"
            Dim command As New SqlCommand(query, connection)
            ' Add parameters using extracted values
            command.Parameters.AddWithValue("@Name", userName)
            command.Parameters.AddWithValue("@PhoneNumber", phoneNumber)
            command.Parameters.AddWithValue("@AdditionalDescription", additionalDescription)
            command.Parameters.AddWithValue("@Location", location)
            command.Parameters.AddWithValue("@NeedsIDs", needsIDs)
            command.Parameters.AddWithValue("@Others", others)

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
