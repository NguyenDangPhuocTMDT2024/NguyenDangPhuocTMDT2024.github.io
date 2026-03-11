function returnDateTime(){
    const currentDate = new Date();
    const date =currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    document.getElementById("submitTime").innerHTML = `${date} ${time}`;
}
window.onload = returnDateTime;


function avgScore() {
    const questions = ["qna", "enthusiasm", "timetable", "attitudeToStudents", "technology", "creativity", "transmission", "attitude", "interaction", "knowledge", "organization"];
    let totalScore = 0;
    let questionCount = 0;
    for (const question of questions) {
        const radios = document.getElementsByName(question);
        for (const radio of radios) {
            if (radio.checked) {
                totalScore += parseInt(radio.value);
                questionCount++;
                break;
            }        
        }
    }
    if(questionCount < questions.length) {
        document.getElementById("score").innerHTML = "Chưa hoàn thành đánh giá.";
        return;
    }
    const averageScore = totalScore / questions.length;
    document.getElementById("score").innerHTML = '<b>' + averageScore.toFixed(2) + '</b>';
}

function submitForm() {
    // Lấy dữ liệu input
    const courseName = document.getElementById("subjectName").value;
    const teacherName = document.getElementById("teacherName").value;
    const studentName = document.getElementById("studentName").value;
    const submitTime = document.getElementById("submitTime") ? document.getElementById("submitTime").innerHTML : "";

    // Danh sách tiêu chí
    const criteriaList = [
        { name: "transmission", label: "Tiêu chí 1" },
        { name: "attitude", label: "Tiêu chí 2" },
        { name: "interaction", label: "Tiêu chí 3" },
        { name: "knowledge", label: "Tiêu chí 4" },
        { name: "organization", label: "Tiêu chí 5" },
        { name: "qna", label: "Tiêu chí 6" },
        { name: "enthusiasm", label: "Tiêu chí 7" },
        { name: "timetable", label: "Tiêu chí 8" },
        { name: "attitudeToStudents", label: "Tiêu chí 9" },
        { name: "technology", label: "Tiêu chí 10" },
        { name: "creativity", label: "Tiêu chí 11" }
    ];

    let criteria = {};
    let totalScore = 0;
    let count = 0;
    for (const item of criteriaList) {
        const selected = document.querySelector('input[name="' + item.name + '"]:checked');
        if (!selected) {
            alert("Vui lòng hoàn thành tất cả các tiêu chí.");
            return false;
        }
        criteria[item.label] = selected.value;
        totalScore += parseInt(selected.value);
        count++;
    }
    const averageScore = (totalScore / count).toFixed(2);

    // Tạo object JSON
    const jsonData = {
        courseName,
        teacherName,
        studentName,
        submitTime,
        criteria,
        averageScore
    };

    // Hiển thị ra màn hình dạng JSON đẹp
    document.getElementById("jsonData").innerHTML = '<pre>' + JSON.stringify(jsonData, null, 4) + '</pre>';
    return false;
}