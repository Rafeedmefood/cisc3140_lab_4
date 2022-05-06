PURPOSE:

Create an API that contains info about cars and their total scores, as well as owner information. The API allows you to actually create more cars to add into your database
as well as the ability to update owner information of previous cars. 

Routes: 

    Get Requests - 
        http://localhost:8080/cars/ ---> Returns ALL cars
        http://localhost:8080/cars/:id ---> Returns car that has matching car ID
        http://localhost:8080/cars/make/:make ---> Returns cars that have matching make

    Put Requests - 
        http://localhost:8080/cars/update/owner ---> Updates the owner of a car/ cars
                                                        NOTE: MUST ATTACH A JSON BODY WITH A KEY VALUE PAIR CALLED "update" CONTAINING AN ARRAY OF OBJECTS CONTAINING 2
                                                                     KEY VALUE PAIRS: "id" and the target car ID, as well as "name" and the name of the new owner

                                                        EX: 
                                                            {
                                                                "update" : [
                                                                {
                                                                "id" : "69",
                                                                "name" : "Rafid"
                                                                },
                                                                {
                                                                "id" : "1000",
                                                                "name" : "Brian"
                                                                }
                                                                ]
                                                            }

        http://localhost:8080/cars/update/email ---> Updates the owner email information of a car/ cars
                                                        NOTE: MUST ATTACH A JSON BODY WITH A KEY VALUE PAIR CALLED "update" CONTAINING AN ARRAY OF OBJECTS CONTAINING 2
                                                                     KEY VALUE PAIRS: "id" and the target car ID, as well as "email" and the new desired email
                                                        
                                                        EX: 
                                                            {
                                                                "update" : [
                                                                {
                                                                "id" : "69",
                                                                "email" : "rafid@yahooooooooooooo.com"
                                                                },
                                                                {
                                                                "id" : "1000",
                                                                "email" : "brian@bookface.moc"
                                                                }
                                                                ]
                                                            }
    Post Requests - 
        http://localhost:8080/cars/new ---> Adds new car(s) entry to database
                                                        NOTE: MUST ATTACH A JSON BODY WITH A KEY VALUE PAIR CALLED "add" CONTAINING AN ARRAY OF OBJECTS CONTAINING 7
                                                                     KEY VALUE PAIRS: "id" and the car ID for the car, "name" and the owner name for the car, 
                                                                                        "email" and the owner email for the car, "make" and the make of the car,
                                                                                        "model" and the model of the car, "year" and the year of the car,
                                                                                        and "score" and the total score for this car
                                                            
                                                        EX:
                                                            {
                                                                "add" : [
                                                                {
                                                                "id" : "3483",
                                                                "name" : "Billy",
                                                                "email" : "billy@yahooooooooooooo.com",
                                                                "make" : "Jeep",
                                                                "model" : "Wrangler",
                                                                "year" : "3483",
                                                                "score" : "181"
                                                                },
                                                                {
                                                                "id" : "3484",
                                                                "name" : "Bob",
                                                                "email" : "bob@yahooooooooooooo.com",
                                                                "make" : "Jeep",
                                                                "model" : "Wrangler",
                                                                "year" : "3500",
                                                                "score" : "200"
                                                                }
                                                                ]
                                                            }