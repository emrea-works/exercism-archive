use time::PrimitiveDateTime as DateTime;

// Returns a DateTime one billion seconds after start.
// pub fn after(start: DateTime) -> DateTime {
//     // todo!("What time is a gigasecond later than {start}");
// }

pub fn main (){
    // after("")
    let current_time = DateTime::new("2023-10-24", "13:44");
    let formatted = current_time.format("%Y-%m-%d");
    println!("Time: {}", current_time);
}
