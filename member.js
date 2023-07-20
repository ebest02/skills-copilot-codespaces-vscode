function skillsMember() 
{
    var skillsMember = document.getElementById("skillsMember").value;
    var skillsMember = skillsMember.toLowerCase();
    var skillsMember = skillsMember.trim();
    var skillsMember = skillsMember.replace(/\s+/g, '');
    
    if (skillsMember == "yes") 
    {
        document.getElementById("skillsMember").value = "Yes";
        document.getElementById("skillsMember").style.color = "green";
    }
    else if (skillsMember == "no") 
    {
        document.getElementById("skillsMember").value = "No";
        document.getElementById("skillsMember").style.color = "red";
    }
    else 
    {
        document.getElementById("skillsMember").value = "Yes or No";
        document.getElementById("skillsMember").style.color = "orange";
    }
}

