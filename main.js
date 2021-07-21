var images=[
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fcartoon-mom&psig=AOvVaw1whlOvWJqVzkfKs4tWUx1s&ust=1626933815240000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDoq7O_8_ECFQAAAAAdAAAAABAD";
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinclipart.com%2Fdownpngs%2FiboRiJ_bonecas-meninas-clipart-little-girls-images-young-children%2F&psig=AOvVaw374VwmOLOWHWUeI-liX_6W&ust=1626933191897000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjiw4698_ECFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dboy%2BCartoon&psig=AOvVaw3IwB_em0ot0UwAZYZqEdq_&ust=1626933748092000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODos5G_8_ECFQAAAAAdAAAAABAD",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FbJTiwo_fathers-day-png-download-dad-cartoon-png-transparent%2F&psig=AOvVaw2AWzSFUkViirNHRqRcMx0z&ust=1626933849756000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDpx8e_8_ECFQAAAAAdAAAAABAD",
    
];

var names=[
    "Soni Singh",
    "Kashvi Singh",
    "Rohan Singh",
    "Soham Singh"
];

var i = 0;
function update(){

    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }

    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("family_member_image").innerHTML = updateImage;
    document.getElementById("family_member_name").innerHTML = updateName;
}