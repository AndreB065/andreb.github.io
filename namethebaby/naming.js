var name_list = document.getElementById('names-list');
var index = 0;

var mynames = ['Emma','Olivia','Ava','Isabella','Sophia','Charlotte','Mia','Amelia','Harper','Evelyn',
    'Abigail','Emily','Elizabeth','Mila','Ella','Avery','Sofia','Camila','Aria','Scarlett',
    'Victoria','Madison','Luna','Grace','Chloe','Penelope','Layla','Riley','Zoey','Nora',
    'Lily','Eleanor','Hannah','Lillian','Addison','Aubrey','Ellie','Stella','Natalie','Zoe',
    'Leah','Hazel','Violet','Aurora','Savannah','Audrey','Brooklyn','Bella','Claire','Skylar',
    'Lucy','Paisley','Everly','Anna','Caroline','Nova','Genesis','Emilia','Kennedy','Samantha',
    'Maya','Willow','Kinsley','Naomi','Aaliyah','Elena','Sarah','Ariana','Allison','Gabriella',
    'Alice','Madelyn','Cora','Ruby','Eva','Serenity','Autumn','Adeline','Hailey','Gianna',
    'Valentina','Isla','Eliana','Quinn','Nevaeh','Ivy','Sadie','Piper','Lydia','Alexa',
    'Josephine','Emery','Julia','Delilah','Arianna','Vivian','Kaylee','Sophie','Brielle','Madeline',
    'Peyton','Rylee','Clara','Hadley','Melanie','Mackenzie','Reagan','Adalynn','Liliana','Aubree',
    'Jade','Katherine','Isabelle','Natalia','Raelynn','Maria','Athena','Ximena','Arya','Leilani',
    'Taylor','Faith','Rose','Kylie','Alexandra','Mary','Margaret','Lyla','Ashley','Amaya',
    'Eliza','Brianna','Bailey','Andrea','Khloe','Jasmine','Melody','Iris','Isabel','Norah',
    'Annabelle','Valeria','Emerson','Adalyn','Ryleigh','Eden','Emersyn','Anastasia',
    'Kayla','Alyssa','Juliana','Charlie','Esther','Ariel','Cecilia','Valerie','Alina','Molly',
    'Reese','Aliyah','Lilly','Parker','Finley','Morgan','Sydney','Jordyn','Eloise','Trinity',
    'Daisy','Kimberly','Lauren','Genevieve','Sara','Arabella','Harmony','Elise','Remi','Teagan',
    'Alexis','London','Sloane','Laila','Lucia','Diana','Juliette','Sienna','Elliana','Londyn',
    'Ayla','Callie','Gracie','Josie','Amara','Jocelyn','Daniela','Everleigh','Mya','Rachel',
    'Summer','Alana','Brooke','Alaina','Mckenzie','Catherine','Amy','Presley','Journee','Rosalie',
    'Ember','Brynlee','Rowan','Joanna','Paige','Rebecca','Ana','Sawyer','Mariah','Nicole',
    'Brooklynn','Payton','Marley','Fiona','Georgia','Lila','Harley','Adelyn','Alivia','Noelle',
    'Gemma','Vanessa','Journey','Makayla','Angelina','Adaline','Catalina','Alayna','Julianna','Leila',
    'Lola','Adriana','June','Juliet','Jayla','River','Tessa','Lia','Dakota','Delaney',
    'Selena','Blakely','Ada','Camille','Zara','Malia','Hope','Samara','Vera','Mckenna',
    'Briella','Izabella','Hayden','Raegan','Michelle','Angela','Ruth','Freya','Kamila','Vivienne',
    'Aspen','Olive','Kendall','Elaina','Thea','Kali','Destiny','Amiyah','Evangeline','Cali',
    'Blake','Elsie','Juniper','Alexandria','Myla','Ariella','Kate','Mariana','Lilah','Charlee',
    'Daleyza','Nyla','Jane','Maggie','Zuri','Aniyah','Lucille','Leia','Melissa','Adelaide',
    'Amina','Giselle','Lena','Camilla','Miriam','Millie','Brynn','Gabrielle','Sage','Annie',
    'Logan','Lilliana','Haven','Jessica','Kaia','Magnolia','Amira','Adelynn','Makenzie','Stephanie',
    'Nina','Phoebe','Arielle','Evie','Lyric','Alessandra','Gabriela','Paislee','Raelyn','Madilyn',
    'Paris','Makenna','Kinley','Gracelyn','Talia','Maeve','Rylie','Kiara','Evelynn','Brinley',
    'Jacqueline','Laura','Gracelynn','Lexi','Ariah','Fatima','Jennifer','Kehlani','Alani','Ariyah',
    'Luciana','Allie','Heidi','Maci','Phoenix','Felicity','Joy','Kenzie','Veronica','Margot',
    'Addilyn','Lana','Cassidy','Remington','Saylor','Ryan','Keira','Harlow','Miranda','Angel','Amanda',
    'Daniella','Royalty','Gwendolyn','Ophelia','Heaven','Jordan','Madeleine','Esmeralda','Kira','Miracle',
    'Elle','Amari','Danielle','Daphne','Willa','Haley','Gia','Kaitlyn','Oakley','Kailani',
    'Winter','Alicia','Serena','Nadia','Aviana','Demi','Jada','Braelynn','Dylan','Ainsley',
    'Alison','Camryn','Avianna','Bianca','Skyler','Scarlet','Maddison','Nylah','Sarai','Regina',
    'Dahlia','Nayeli','Raven','Helen','Adrianna','Averie','Skye','Kelsey','Tatum','Kensley',
    'Maliyah','Erin','Viviana','Jenna','Anaya','Carolina','Shelby','Sabrina','Mikayla','Annalise',
    'Octavia','Lennon','Blair','Carmen','Yaretzi','Kennedi','Mabel','Zariah','Kyla','Christina',
    'Selah','Celeste','Eve','Mckinley','Milani','Frances','Jimena','Kylee','Leighton','Katie',
    'Aitana','Kayleigh','Sierra','Kathryn','Rosemary','Jolene','Alondra','Elisa','Helena','Charleigh',
    'Hallie','Lainey','Avah','Jazlyn','Kamryn','Mira','Cheyenne','Francesca','Antonella','Wren',
    'Chelsea','Amber','Emory','Lorelei','Nia','Abby','April','Emelia','Carter','Aylin',
    'Cataleya','Bethany','Marlee','Carly','Kaylani','Emely','Liana','Madelynn','Cadence','Matilda',
    'Sylvia','Myra','Fernanda','Oaklyn','Elianna','Hattie','Dayana','Kendra','Maisie','Malaysia',
    'Kara','Katelyn','Maia','Celine','Cameron','Renata','Jayleen','Charli','Emmalyn','Holly',
    'Azalea','Leona','Alejandra','Bristol','Collins','Imani','Meadow','Alexia','Edith','Kaydence',
    'Leslie','Lilith','Kora','Aisha','Meredith','Danna','Wynter','Emberly','Julieta','Michaela',
    'Alayah','Jemma','Reign','Colette','Kaliyah','Elliott','Johanna','Remy','Sutton','Emmy',
    'Virginia','Briana','Oaklynn','Adelina','Everlee','Megan','Angelica','Justice','Mariam','Khaleesi',
    'Macie','Karsyn','Alanna','Aleah','Mae','Mallory','Esme','Skyla','Madilynn','Charley',
    'Allyson','Hanna','Shiloh','Henley','Macy','Maryam','Ivanna','Ashlynn','Lorelai','Amora',
    'Ashlyn','Sasha','Baylee','Beatrice','Itzel','Priscilla','Marie','Jayda','Liberty','Rory',
    'Alessia','Alaia','Janelle','Kalani','Gloria','Sloan','Dorothy','Greta','Julie','Zahra',
    'Savanna','Annabella','Poppy','Amalia','Zaylee','Cecelia','Coraline','Kimber','Emmie','Anne',
    'Karina','Kassidy','Kynlee','Monroe','Anahi','Jaliyah','Jazmin','Maren','Monica','Siena',
    'Marilyn','Reyna','Kyra','Lilian','Jamie','Melany','Alaya','Ariya','Kelly','Rosie',
    'Adley','Dream','Jaylah','Laurel','Jazmine','Mina','Karla','Bailee','Aubrie','Katalina',
    'Melina','Harlee','Elliot','Hayley','Elaine','Karen','Dallas','Irene','Lylah','Ivory',
    'Chaya','Rosa','Aleena','Braelyn','Nola','Alma','Leyla','Pearl','Addyson','Roselyn',
    'Lacey','Lennox','Reina','Aurelia','Noa','Janiyah','Jessie','Madisyn','Saige','Alia',
    'Tiana','Astrid','Cassandra','Kyleigh','Romina','Stevie','Haylee','Zelda','Lillie','Aileen',
    'Brylee','Eileen','Yara','Ensley','Lauryn','Giuliana','Livia','Anya','Mikaela','Palmer',
    'Lyra','Mara','Marina','Kailey','Liv','Clementine','Kenna','Briar','Emerie','Galilea',
    'Tiffany','Bonnie','Elyse','Cynthia','Frida','Kinslee','Tatiana','Joelle','Armani','Jolie',
    'Nalani','Rayna','Yareli','Meghan','Rebekah','Addilynn','Faye','Zariyah','Lea','Aliza',
    'Julissa','Lilyana','Anika','Kairi','Aniya','Noemi','Angie','Crystal','Bridget','Ari',
    'Davina','Amelie','Amirah','Annika','Elora','Xiomara','Linda','Hana','Laney','Mercy',
    'Hadassah','Madalyn','Louisa','Simone','Kori','Jillian','Alena','Malaya','Miley','Milan',
    'Sariyah','Malani','Clarissa','Nala','Princess','Amani','Analia','Estella','Milana','Aya',
    'Chana','Jayde','Tenley','Zaria','Itzayana','Penny','Ailani','Lara','Aubriella','Clare',
    'Lina','Rhea','Bria','Thalia','Keyla','Haisley','Ryann','Addisyn','Amaia','Chanel',
    'Ellen','Harmoni','Aliana','Tinsley','Landry','Paisleigh','Lexie','Myah','Rylan','Deborah',
    'Emilee','Laylah','Novalee','Ellis','Emmeline','Avalynn','Hadlee','Legacy','Braylee','Elisabeth',
    'Kaylie','Ansley','Dior','Paula','Belen','Corinne','Maleah','Martha','Teresa','Salma',
    'Louise','Averi','Lilianna','Amiya','Milena','Royal','Aubrielle','Calliope','Frankie','Natasha',
    'Kamilah','Meilani','Raina','Amayah','Lailah','Rayne','Zaniyah','Isabela','Nathalie','Miah',
    'Opal','Kenia','Azariah','Hunter','Tori','Andi','Keily','Leanna','Scarlette','Jaelyn',
    'Saoirse','Selene','Dalary','Lindsey','Marianna','Ramona','Estelle','Giovanna','Holland','Nancy',
    'Emmalynn','Mylah','Rosalee','Sariah','Zoie','Blaire','Lyanna','Maxine','Anais','Dana',
    'Judith','Kiera','Jaelynn','Noor','Kai','Adalee','Oaklee','Amaris','Jaycee','Belle',
    'Carolyn','Della','Karter','Sky','Treasure','Vienna','Jewel','Rivka','Rosalyn','Alannah',
    'Ellianna','Sunny','Claudia','Cara','Hailee','Estrella','Harleigh','Zhavia','Alianna','Brittany',
    'Jaylene','Journi','Marissa','Mavis','Iliana','Jurnee','Aislinn','Alyson','Elsa','Kamiyah',
    'Kiana','Lisa','Arlette','Kadence','Kathleen','Halle','Erika','Sylvie','Adele','Erica',
    'Veda','Whitney','Bexley','Emmaline','Guadalupe','August','Brynleigh','Gwen','Promise','Alisson',
    'India','Madalynn','Paloma','Patricia','Samira','Aliya','Casey','Jazlynn','Paulina','Dulce',
    'Kallie','Perla','Adrienne','Alora','Nataly','Ayleen','Christine','Kaiya','Ariadne','Karlee',
    'Barbara','Lillianna','Raquel','Saniyah','Yamileth','Arely','Celia','Heavenly','Kaylin','Marisol',
    'Marleigh','Avalyn','Berkley','Kataleya','Zainab','Dani','Egypt','Joyce','Kenley','Annabel',
    'Kaelyn','Etta','Hadleigh','Joselyn','Luella','Jaylee','Zola','Alisha','Ezra','Queen',
    'Amia','Annalee','Bellamy','Paola','Tinley','Violeta','Jenesis','Arden','Giana','Wendy',
    'Ellison','Florence','Margo','Naya','Robin','Sandra','Scout','Waverly','Janessa','Jayden',
    'Micah','Novah','Zora','Ann','Jana','Taliyah','Vada','Giavanna','Ingrid','Valery',
    'Azaria','Emmarie','Esperanza','Kailyn','Aiyana','Keilani','Austyn','Whitley','Elina','Kimora',
    'Maliah'];

    console.log(mynames.length);

name_list = "<div>" + mynames[0] + "</div>";

function showNames(){
  name_list = "Names go here " + mynames + "<br>";
}

//Click button to add new name to the list
$('#add-name').on('click',function(){
  addNewName();
});

//Show the next name on click
$('#next').on('click',function(){
  showNextName();
});

//Show the previous name on click
$('#back').on('click',function(){
  showPreviousName();
});

//Add new name to the list
function addNewName(){
	let new_name = document.getElementById('new-name').value.toLowerCase();
	let input_index = mynames.indexOf(new_name);

	if(new_name == ""){
		document.getElementById("new-name").focus();
	}else if(input_index >= 1){
		alert("\"" +new_name+ "\"" + " is already in the list!");
	}else{
		mynames.push(new_name);
		
		//showNames();
		document.getElementById("new-name").value = "";
		document.getElementById("new-name").focus();
	}
}

function showNextName(){
  let max = (mynames.length - 1);

  if (index == max){
    index = 0;
  }
  
  name_list.innerHTML = mynames[index];
  index++;
}

function showPreviousName(){
  if (index == 0){
    index = (mynames.length - 1)
  }

  name_list.innerHTML = mynames[index];
  index--;
}