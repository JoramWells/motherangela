/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const DoctorNotes = sequelize.define('medication', {
  node_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  doctor_id: {
    type: DataTypes.BIGINT,
  },
  appointment_id: {
    type: DataTypes.UUID,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  treatment: {
    type: DataTypes.STRING,
  },
  patient_id: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.STRING,
  },
  presenting_complaints: {
    type: DataTypes.STRING,
  },
  history_of_presenting_complaints: {
    type: DataTypes.STRING,
  },
  previous_medical_history: {
    type: DataTypes.STRING,
  },
  social_family_history: {
    type: DataTypes.STRING,
  },
  general_examination: {
    type: DataTypes.STRING,
  },
  investigation: {
    type: DataTypes.STRING,
  },
  review: {
    type: DataTypes.STRING,
  },
  central_nervous_system: {
    type: DataTypes.STRING,
  },
  cardio_vascular_system: {
    type: DataTypes.STRING,
  },
  respiratory_system: {
    type: DataTypes.STRING,
  },
  per_abdomen: {
    type: DataTypes.STRING,
  },
  musco_skeletal: {
    type: DataTypes.STRING,
  },
  obstetrics_and_gynaecology: {
    type: DataTypes.STRING,
  },
  final_diagnosis: {
    type: DataTypes.STRING,
  },
  eye: {
    type: DataTypes.STRING,
  },
  ear_nose_throat: {
    type: DataTypes.STRING,
  },
  breast: {
    type: DataTypes.STRING,
  },
  skin: {
    type: DataTypes.STRING,
  },
  other_examinations: {
    type: DataTypes.STRING,
  },
  consultation_type_id: {
    type: DataTypes.INTEGER,
  },
  pelvic_examination: {
    type: DataTypes.STRING,
  },
  date_of_saving: {
    type: DataTypes.STRING,
  },
  time_of_saving: {
    type: DataTypes.STRING,
  },
  final_diagnosis_id: {
    type: DataTypes.INTEGER,
  },
  sphere_top_right: {
    type: DataTypes.STRING,
  },
  sphere_bottom_right: {
    type: DataTypes.STRING,
  },
  cylinder_bottom_right: {
    type: DataTypes.STRING,
  },
  cylinder_top_right: {
    type: DataTypes.STRING,
  },
  axis_top_right: {
    type: DataTypes.STRING,
  },
  axis_bottom_right: {
    type: DataTypes.STRING,
  },
  sphere_top_left: {
    type: DataTypes.STRING,
  },
  sphere_bottom_left: {
    type: DataTypes.STRING,
  },
  cylinder_top_left: {
    type: DataTypes.STRING,
  },
  cylinder_bottom_left: {
    type: DataTypes.STRING,
  },
  axis_top_left: {
    type: DataTypes.STRING,
  },
  axis_bottom_left: {
    type: DataTypes.STRING,
  },
  addition_left_eye: {
    type: DataTypes.STRING,
  },
  addition_right_eye: {
    type: DataTypes.STRING,
  },
  eyewear_category_id_right_eye: {
    type: DataTypes.INTEGER,
  },
  frame: {
    type: DataTypes.STRING,
  },
  frame_colour: {
    type: DataTypes.STRING,
  },
  frame_size: {
    type: DataTypes.STRING,
  },
  right_eye_lens_quantity: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = DoctorNotes;
