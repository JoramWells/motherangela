const { Sequelize } = require("sequelize");
const { User } = require("../models"); // Adjust based on your project

const getAgeGroupCounts = async () => {
  const ageGroupCounts = await User.findAll({
    attributes: [
      [Sequelize.literal(` 
        COUNT(CASE WHEN DATE_PART('year', AGE(
          CASE 
            WHEN LENGTH(dob) = 4 THEN TO_DATE(dob || '-01-01', 'YYYY-MM-DD') 
            ELSE dob::DATE 
          END
        )) BETWEEN 0 AND 12 THEN 1 END) 
      `), "children"],
      [Sequelize.literal(`
        COUNT(CASE WHEN DATE_PART('year', AGE(
          CASE 
            WHEN LENGTH(dob) = 4 THEN TO_DATE(dob || '-01-01', 'YYYY-MM-DD') 
            ELSE dob::DATE 
          END
        )) BETWEEN 13 AND 19 THEN 1 END)
      `), "teenagers"],
      [Sequelize.literal(`
        COUNT(CASE WHEN DATE_PART('year', AGE(
          CASE 
            WHEN LENGTH(dob) = 4 THEN TO_DATE(dob || '-01-01', 'YYYY-MM-DD') 
            ELSE dob::DATE 
          END
        )) BETWEEN 20 AND 39 THEN 1 END)
      `), "youngAdults"],
      [Sequelize.literal(`
        COUNT(CASE WHEN DATE_PART('year', AGE(
          CASE 
            WHEN LENGTH(dob) = 4 THEN TO_DATE(dob || '-01-01', 'YYYY-MM-DD') 
            ELSE dob::DATE 
          END
        )) BETWEEN 40 AND 59 THEN 1 END)
      `), "middleAged"],
      [Sequelize.literal(`
        COUNT(CASE WHEN DATE_PART('year', AGE(
          CASE 
            WHEN LENGTH(dob) = 4 THEN TO_DATE(dob || '-01-01', 'YYYY-MM-DD') 
            ELSE dob::DATE 
          END
        )) >= 60 THEN 1 END)
      `), "seniors"],
    ],
    raw: true,
  });

  return ageGroupCounts;
};

// Call the function
getAgeGroupCounts().then(console.log).catch(console.error);
