const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/naukrii")
  .then(() => console.log("Connection Successfil...."))
  .catch((err) => console.log(err));
const jobSchema = {
  name: "String",
  title: "String",
  city: "String",
  noticeperiod: Number,
  rating: Number,
  workfromhome: Boolean,
  details: "String",
  skill: "String",
  noofopening: Number,
};
const Job = new mongoose.model("Job", jobSchema);
const createDocument = async () => {
  try {
    const sharechatJob = new Job({
      name: "ShareChat",
      title: "JavaScript Developer",
      city: "Kolkata",
      noticeperiod: 2,
      rating: 5,
      workfromhome: true,
      details: "Good Tech Company",
      skill: "Javascript",
      noofopening: 10,
    });
    const infosysJob = new Job({
      name: "Infosys",
      title: "Front-end Developer",
      city: "Bangalore",
      noticeperiod: 2,
      rating: 5,
      workfromhome: true,
      details: "MNC Tech Company",
      skill: "Fulss-Stack",
      noofopening: 20,
    });
    const wiproJob = new Job({
      name: "Wipro",
      title: "Backend Developer",
      city: "Chennai",
      noticeperiod: 2,
      rating: 3,
      workfromhome: false,
      details: "Good Tech Company",
      skill: "Node",
      noofopening: 10,
    });
    const cognizantJob = new Job({
      name: "Cognizant",
      title: "Full Stack Developer",
      city: "Hyderabad",
      noticeperiod: 4,
      rating: 2,
      workfromhome: false,
      details: "Average",
      skill: "MongoDb",
      noofopening: 8,
    });
    const credJob = new Job({
      name: "Cred",
      title: "JavaScript Developer",
      city: "Bangalore",
      noticeperiod: 2,
      rating: 5,
      workfromhome: true,
      details: "Good Tech Company",
      skill: "Html",
      noofopening: 5,
    });
    const capegminiJob = new Job({
      name: "capegmini",
      title: "Node Developer",
      city: "Hyderabad",
      noticeperiod: 2,
      rating: 3,
      workfromhome: true,
      details: "Average Company",
      skill: "Node",
      noofopening: 10,
    });
    const ciscoJob = new Job({
      name: "Cisco",
      title: "front-end Developer",
      city: "Kolkata",
      noticeperiod: 2,
      rating: 4,
      workfromhome: false,
      details: "Good Tech Company",
      skill: "Tailwind",
      noofopening: 10,
    });
    const microsoftJob = new Job({
      name: "Microsoft",
      title: "Full Stack Developer",
      city: "Bangalore",
      noticeperiod: 3,
      rating: 5,
      workfromhome: true,
      details: "Good Tech Company",
      skill: "Node",
      noofopening: 10,
    });
    const googleJob = new Job({
      name: "Google",
      title: "JavaScript Developer",
      city: "Hyderabad",
      noticeperiod: 2,
      rating: 5,
      workfromhome: true,
      details: "Good Tech Company",
      skill: "Javascript",
      noofopening: 5,
    });
    const amazonJob = new Job({
      name: "Amazon",
      title: "Back-end Developer",
      city: "Bangalore",
      noticeperiod: 2,
      rating: 5,
      workfromhome: true,
      details: "Good Tech Company",
      skill: "MongoDb",
      noofopening: 10,
    });

    const result = await Job.insertMany([
      sharechatJob,
      infosysJob,
      wiproJob,
      cognizantJob,
      credJob,
      capegminiJob,
      ciscoJob,
      microsoftJob,
      googleJob,
      amazonJob,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
1;

const getnoticePeiod = async () => {
  var res = await Job.find({ noticeperiod: 2 }).select({ title: 1, _id: 0 });
  console.log(res);
};

const getjob = async () => {
  var resu = await Job.find({
    city: { $in: ["Kolkata", "JavaScript Developer"] },
  }).select({ title: 1, _id: 0 });
  console.log(resu);
};

const getsort = async () => {
  var resul = await Job.find({ details: "Good Tech Company" })
    .select({ title: 1, _id: 0 })
    .sort("rating:1");
  console.log(resul);
};

const getdetails = async () => {
  var resul = await Job.find({ title: "JavaScript Developer" }).select({
    details: 1,
    _id: 0,
  });

  console.log(resul);
};

const workFromHome = async () => {
  var result = await Job.find({ workfromhome: true }).select({
    name: 1,
    _id: 0,
  });

  console.log(result);
};
workFromHome();
