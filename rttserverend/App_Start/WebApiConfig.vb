Imports System.Web.Http
Imports System.Web.Http.Cors
Public Module WebApiConfig
    Public Sub Register(ByVal config As HttpConfiguration)
        ' Allow only specific origins, headers, and HTTP methods
        Dim cors As New EnableCorsAttribute("http://localhost:5173,http://localhost:5174,http://localhost:5175", "*", "GET,POST,PUT,DELETE")
        config.EnableCors(cors)
        ' Web API configuration and services
        config.Formatters.Remove(config.Formatters.XmlFormatter)
        config.Formatters.Add(config.Formatters.JsonFormatter)

        ' Web API routes
        config.MapHttpAttributeRoutes()

        config.Routes.MapHttpRoute(
            name:="DefaultApi",
            routeTemplate:="api/{controller}/{id}",
            defaults:=New With {.id = RouteParameter.Optional}
        )
    End Sub
End Module
