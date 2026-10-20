const employee = {
    name: "Uhail",
    address: {
        street: "004 Cibatu",
        city: "Sukabumi",
        postalCode: "43213"
    }
};

employee.address.city = "Bandung";

console.log(`Complete Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.postalCode}`);
