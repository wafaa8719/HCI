<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persons Information</title>
</head>
<body>
    <script>
        const numPersons = parseInt(prompt("Enter the number of persons:"));

        const ArrayNames = [];
        const ArrayAges = [];

        for (let i = 0; i < numPersons; i++) {
            let name = prompt(`Enter name of person ${i+1}:`);
            let age = parseInt(prompt(`Enter age of person ${i+1}:`));
            
            if (typeof name === 'string' && name.length > 2 && name.length < 12 &&
                typeof age === 'number' && age > 18 && age < 60) {
                ArrayNames.push(name);
                ArrayAges.push(age);
            } else {
                console.log(`Invalid input for person ${i+1}. Please try again.`);
                i--; // Decrementing i to repeat input for this person
            }
        }

        console.log("Names:", ArrayNames);
        console.log("Ages:", ArrayAges);
    </script>
</body>
</html>
