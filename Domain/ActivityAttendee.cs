using System;

namespace Domain
{
    public class ActivityAttendee
    {
        // Part of standard join table
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid ActivityId { get; set; }
        public Activity Activity { get; set; }

        // Additional Informaiton
        public bool IsHost { get; set; }
        
        
    }
}