function password(arg) {
  [user, pass] = [arg[0], arg[1]]
  return arg.includes(pass) ? `Welcome ${user}!` : null
}

// console.log(password(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop']))
    
 
 
  


