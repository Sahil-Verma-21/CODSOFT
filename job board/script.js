async function loadJobs() {
    const res = await fetch("http://localhost:5000/api/jobs");
    const jobs = await res.json();

    const jobList = document.getElementById("job-list");
    jobList.innerHTML = "";

    jobs.forEach(job => {
        const div = document.createElement("div");
        div.classList.add("job-card");
        div.innerHTML = `
            <h3>${job.title}</h3>
            <p><b>Company:</b> ${job.company}</p>
            <p><b>Location:</b> ${job.location}</p>
            <p><b>Category:</b> ${job.category}</p>
            <p>${job.description}</p>
        `;
        jobList.appendChild(div);
    });
}
