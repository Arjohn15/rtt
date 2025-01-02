Imports System.Data.SqlClient
Imports System.Web.Http
Imports Newtonsoft.Json.Linq

Public Class AdminLoginController
    Inherits ApiController

    ' Define the connection string to your database.
    Private connectionString As String = "Server=LAPTOP-Q4HT0K8V\RTTSERVEREND;Database=Reqs;User Id=sa;Password=gregarsh12345;"

    ' POST: api/AdminLogin
    <HttpPost>
    Public Function Post(<FromBody> input As Object) As IHttpActionResult
        ' Parse the input JSON to JObject
        Dim userData As JObject = CType(input, JObject)

        ' Check if userData is Nothing or missing required fields
        If userData Is Nothing OrElse
           userData("userName") Is Nothing OrElse
           userData("password") Is Nothing OrElse
           String.IsNullOrEmpty(userData("userName").ToString()) OrElse
           String.IsNullOrEmpty(userData("password").ToString()) Then
            Return Ok("dontAllowThisDude119751")
        End If

        ' Extract and use the values
        Dim userName As String = userData("userName").ToString()
        Dim password As String = userData("password").ToString()

        Dim recordExists As Boolean = False

        Using connection As New SqlConnection(connectionString)
            Try
                connection.Open()

                ' Define the query to check if the record exists.
                Dim query As String = "SELECT COUNT(1) FROM AdminUsers WHERE userName = @userName AND password = @password"

                Using command As New SqlCommand(query, connection)
                    ' Add the parameters to prevent SQL injection.
                    command.Parameters.AddWithValue("@userName", userName)
                    command.Parameters.AddWithValue("@password", password)

                    ' Execute the query and check if the record exists.
                    Dim count As Integer = Convert.ToInt32(command.ExecuteScalar())
                    recordExists = count > 0
                End Using
            Catch ex As Exception
                ' Handle exceptions (e.g., log the error).
                Return InternalServerError(ex)
            End Try
        End Using

        ' Return the result.
        If recordExists Then
            Return Ok("allowThisDude157911")
        Else
            Return Ok("dontAllowThisDude119751")
        End If
    End Function
End Class
