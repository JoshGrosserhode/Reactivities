namespace API.DTOs
{
    public class UserDto
    {
        /// Information that will be returned to client upon logging in
        public string DisplayName { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public string Image { get; set; }
    }
}