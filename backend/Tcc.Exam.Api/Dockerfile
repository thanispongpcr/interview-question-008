FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["Tcc.Exam.Api.csproj", "./"]
RUN dotnet restore "Tcc.Exam.Api.csproj"

COPY . .
RUN dotnet publish "Tcc.Exam.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "Tcc.Exam.Api.dll"]