let userAgeYears, userAgeDays, userAgeMinute, totalHeartbeats, avgBeatsPerMinute;

userAgeYears = 19
userAgeDays = userAgeYears * 365
userAgeDays = userAgeDays + (userAgeYears / 4)

console.log("You are ");
console.log(userAgeDays);
console.log(" days old.\n");

userAgeMinute = userAgeDays * 24 * 60
console.log(userAgeMinute);

avgBeatsPerMinute = 72
console.log(" minute old.\n");

totalHeartbeats = userAgeMinute * avgBeatsPerMinute
console.log("Your heart has beat ");
console.log(totalHeartbeats);
console.log (" times.\n" );