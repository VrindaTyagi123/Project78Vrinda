var family_member_name=[
    "2. My Father (Abhishek Tyagi)",
    "3. My Mother (Shivani Tyagi)",
    "4. Me (Vrinda Tyagi)"
  ];

  var family_member_image=[
    "unnamed.jpg",
    "unnamed (1).jpg",
    "unnamed (2).jpg"
  ];

 var i=0;

 function update()
 {

    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }

    var updatedImage = images[i];
    var updateName = names[i];
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_name").innerHTML = updateName;
 }