function skillsMember()
{
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;
    var memberSkillsArray = new Array();
    var memberSkillsArray = memberSkillsText.split(",");
    var memberSkillsArrayLength = memberSkillsArray.length;
    var memberSkillsArrayIndex = 0;
    var memberSkillsArrayIndexValue = "";
}