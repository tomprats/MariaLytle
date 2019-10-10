puts "Creating Tom"
User.create(
  admin: true,
  email: "tprats108@gmail.com",
  first_name: "Tom",
  last_name: "Prats",
  password: "password"
)

puts "Creating Maria"
User.create(
  admin: true,
  email: "music@marialytle.com",
  first_name: "Maria",
  last_name: "Lytle",
  password: "password"
)
