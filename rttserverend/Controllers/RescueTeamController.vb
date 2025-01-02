Imports System.Web.Http
Imports System.Data.SqlClient
Imports Newtonsoft.Json.Linq
Imports System.Diagnostics.Eventing
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
                    .others = reader("others"),
                    .timestamp = reader("timestamp"),
                    .status = reader("status")
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
        Dim timestamp As String = userData("timestamp").ToString()
        Dim status As String = userData("status").ToString()

        Dim allTeams As New List(Of Object)()

        Using connection As New SqlConnection(connectionString)
            ' Insert the new record into the database
            Dim insertQuery As String = "INSERT INTO Reqs.dbo.ReqsInfo (user_name, user_phoneNumber, user_additionalDescription, location, needsIDs, others, timestamp, status)" &
                                    "VALUES (@Name, @PhoneNumber, @AdditionalDescription, @Location, @NeedsIDs, @Others, @Timestamp, @Status)"
            Dim insertCommand As New SqlCommand(insertQuery, connection)
            ' Add parameters using extracted values
            insertCommand.Parameters.AddWithValue("@Name", userName)
            insertCommand.Parameters.AddWithValue("@PhoneNumber", phoneNumber)
            insertCommand.Parameters.AddWithValue("@AdditionalDescription", additionalDescription)
            insertCommand.Parameters.AddWithValue("@Location", location)
            insertCommand.Parameters.AddWithValue("@NeedsIDs", needsIDs)
            insertCommand.Parameters.AddWithValue("@Others", others)
            insertCommand.Parameters.AddWithValue("@Timestamp", timestamp)
            insertCommand.Parameters.AddWithValue("@Status", status)

            connection.Open()
            Dim rowsAffected As Integer = insertCommand.ExecuteNonQuery()

            If rowsAffected > 0 Then
                Return Ok("success")
            Else
                Return BadRequest("Failed to create team.")
            End If
        End Using
    End Function

    ' PUT: api/RescueTeam
    <HttpPut>
    Public Function UpdateTeam(<FromBody> user As Object) As IHttpActionResult
        ' Cast the received user object to JObject
        Dim userData As JObject = CType(user, JObject)

        ' Extract values from the JObject
        Dim status As String = userData("status").ToString()
        Dim timestamp As String = userData("timestamp").ToString()


        Using connection As New SqlConnection(connectionString)
            Dim query As String = "UPDATE ReqsInfo SET status = @Status WHERE timestamp = @Timestamp"
            Dim command As New SqlCommand(query, connection)
            command.Parameters.AddWithValue("@Status", status)
            command.Parameters.AddWithValue("@Timestamp", timestamp)

            connection.Open()
            Dim rowsAffected As Integer = command.ExecuteNonQuery()

            If rowsAffected > 0 Then
                Return Ok("Requester status updated successfully.")
            Else
                Return NotFound()
            End If
        End Using
    End Function

    ' DELETE: api/RescueTeam/id
    <HttpDelete>
    Public Function DeleteTeam(id As String) As IHttpActionResult
        Using connection As New SqlConnection(connectionString)
            Dim query As String = "DELETE FROM ReqsInfo WHERE timestamp = @Timestamp"
            Dim command As New SqlCommand(query, connection)
            command.Parameters.AddWithValue("@Timestamp", id)

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
