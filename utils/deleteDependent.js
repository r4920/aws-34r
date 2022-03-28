/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let Patient = require('../model/patient');
let OrderItem = require('../model/orderItem');
let Order = require('../model/order');
let Medication = require('../model/medication');
let Note = require('../model/note');
let Encounter = require('../model/encounter');
let Enterprise = require('../model/enterprise');
let Departments = require('../model/departments');
let Customer = require('../model/Customer');
let Task = require('../model/Task');
let Comment = require('../model/Comment');
let Plan = require('../model/Plan');
let Chat_group = require('../model/Chat_group');
let Chat_message = require('../model/Chat_message');
let ToDo = require('../model/ToDo');
let Appointment_schedule = require('../model/Appointment_schedule');
let Appointment_slot = require('../model/Appointment_slot');
let Event = require('../model/Event');
let Blog = require('../model/Blog');
let Master = require('../model/Master');
let User = require('../model/user');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deletePatient = async (filter) =>{
  try {
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);

      const orderFilter = { '$or': [{ patientId : { '$in' : patient } }] };
      await dbService.deleteMany(Order,orderFilter);
      let response  = await dbService.deleteMany(Patient,filter);
      return response;
    } else {
      return 'No patient found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrderItem = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(OrderItem,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrder = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Order,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMedication = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Medication,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteNote = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Note,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEncounter = async (filter) =>{
  try {
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);

      const noteFilter = { '$or': [{ encounterId : { '$in' : encounter } }] };
      await dbService.deleteMany(Note,noteFilter);
      let response  = await dbService.deleteMany(Encounter,filter);
      return response;
    } else {
      return 'No encounter found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEnterprise = async (filter) =>{
  try {
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);

      const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterprise } }] };
      await dbService.deleteMany(Departments,departmentsFilter);
      let response  = await dbService.deleteMany(Enterprise,filter);
      return response;
    } else {
      return 'No enterprise found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteDepartments = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Departments,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCustomer = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Customer,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteTask = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Task,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteComment = async (filter) =>{
  try {
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);

      const CommentFilter = { '$or': [{ parentItem : { '$in' : comment } }] };
      await dbService.deleteMany(Comment,CommentFilter);
      let response  = await dbService.deleteMany(Comment,filter);
      return response;
    } else {
      return 'No Comment found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deletePlan = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Plan,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_group = async (filter) =>{
  try {
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);

      const Chat_messageFilter = { '$or': [{ groupId : { '$in' : chat_group } }] };
      await dbService.deleteMany(Chat_message,Chat_messageFilter);
      let response  = await dbService.deleteMany(Chat_group,filter);
      return response;
    } else {
      return 'No Chat_group found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_message = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Chat_message,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteToDo = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(ToDo,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAppointment_schedule = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Appointment_schedule,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAppointment_slot = async (filter) =>{
  try {
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);

      const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : appointment_slot } }] };
      await dbService.deleteMany(Appointment_schedule,Appointment_scheduleFilter);
      let response  = await dbService.deleteMany(Appointment_slot,filter);
      return response;
    } else {
      return 'No Appointment_slot found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEvent = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Event,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBlog = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Blog,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMaster = async (filter) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);

      const MasterFilter = { '$or': [{ parentId : { '$in' : master } }] };
      await dbService.deleteMany(Master,MasterFilter);
      let response  = await dbService.deleteMany(Master,filter);
      return response;
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const patientFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Patient,patientFilter);

      const orderItemFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(OrderItem,orderItemFilter);

      const orderFilter = { '$or': [{ orderBy : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Order,orderFilter);

      const medicationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Medication,medicationFilter);

      const noteFilter = { '$or': [{ provider : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Note,noteFilter);

      const encounterFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Encounter,encounterFilter);

      const enterpriseFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Enterprise,enterpriseFilter);

      const departmentsFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Departments,departmentsFilter);

      const CustomerFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Customer,CustomerFilter);

      const TaskFilter = { '$or': [{ completedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Task,TaskFilter);

      const CommentFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Comment,CommentFilter);

      const PlanFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Plan,PlanFilter);

      const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Chat_group,Chat_groupFilter);

      const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Chat_message,Chat_messageFilter);

      const ToDoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(ToDo,ToDoFilter);

      const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Appointment_schedule,Appointment_scheduleFilter);

      const Appointment_slotFilter = { '$or': [{ userId : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Appointment_slot,Appointment_slotFilter);

      const EventFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Event,EventFilter);

      const BlogFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Blog,BlogFilter);

      const MasterFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Master,MasterFilter);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(User,userFilter);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(UserTokens,userTokensFilter);

      const roleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Role,roleFilter);

      const projectRouteFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(ProjectRoute,projectRouteFilter);

      const routeRoleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(UserRole,userRoleFilter);
      let response  = await dbService.deleteMany(User,filter);
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(UserTokens,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      await dbService.deleteMany(UserRole,userRoleFilter);
      let response  = await dbService.deleteMany(Role,filter);
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);
      let response  = await dbService.deleteMany(ProjectRoute,filter);
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(RouteRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(UserRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const countPatient = async (filter) =>{
  try {
        
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);

      const orderFilter = { '$or': [{ patientId : { '$in' : patient } }] };
      const orderCnt =  await dbService.countDocument(Order,orderFilter);

      let response = { order : orderCnt, };
      return response;
    } else {
      return {  patient : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrderItem = async (filter) =>{
  try {
        
    const orderItemCnt =  await OrderItem.countDocuments(filter);
    return { orderItem : orderItemCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrder = async (filter) =>{
  try {
        
    const orderCnt =  await Order.countDocuments(filter);
    return { order : orderCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMedication = async (filter) =>{
  try {
        
    const medicationCnt =  await Medication.countDocuments(filter);
    return { medication : medicationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countNote = async (filter) =>{
  try {
        
    const noteCnt =  await Note.countDocuments(filter);
    return { note : noteCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countEncounter = async (filter) =>{
  try {
        
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);

      const noteFilter = { '$or': [{ encounterId : { '$in' : encounter } }] };
      const noteCnt =  await dbService.countDocument(Note,noteFilter);

      let response = { note : noteCnt, };
      return response;
    } else {
      return {  encounter : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countEnterprise = async (filter) =>{
  try {
        
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);

      const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterprise } }] };
      const departmentsCnt =  await dbService.countDocument(Departments,departmentsFilter);

      let response = { departments : departmentsCnt, };
      return response;
    } else {
      return {  enterprise : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countDepartments = async (filter) =>{
  try {
        
    const departmentsCnt =  await Departments.countDocuments(filter);
    return { departments : departmentsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countCustomer = async (filter) =>{
  try {
        
    const CustomerCnt =  await Customer.countDocuments(filter);
    return { Customer : CustomerCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countTask = async (filter) =>{
  try {
        
    const TaskCnt =  await Task.countDocuments(filter);
    return { Task : TaskCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countComment = async (filter) =>{
  try {
        
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);

      const CommentFilter = { '$or': [{ parentItem : { '$in' : comment } }] };
      const CommentCnt =  await dbService.countDocument(Comment,CommentFilter);

      let response = { Comment : CommentCnt, };
      return response;
    } else {
      return {  comment : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countPlan = async (filter) =>{
  try {
        
    const PlanCnt =  await Plan.countDocuments(filter);
    return { Plan : PlanCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_group = async (filter) =>{
  try {
        
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);

      const Chat_messageFilter = { '$or': [{ groupId : { '$in' : chat_group } }] };
      const Chat_messageCnt =  await dbService.countDocument(Chat_message,Chat_messageFilter);

      let response = { Chat_message : Chat_messageCnt, };
      return response;
    } else {
      return {  chat_group : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_message = async (filter) =>{
  try {
        
    const Chat_messageCnt =  await Chat_message.countDocuments(filter);
    return { Chat_message : Chat_messageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countToDo = async (filter) =>{
  try {
        
    const ToDoCnt =  await ToDo.countDocuments(filter);
    return { ToDo : ToDoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAppointment_schedule = async (filter) =>{
  try {
        
    const Appointment_scheduleCnt =  await Appointment_schedule.countDocuments(filter);
    return { Appointment_schedule : Appointment_scheduleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAppointment_slot = async (filter) =>{
  try {
        
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);

      const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : appointment_slot } }] };
      const Appointment_scheduleCnt =  await dbService.countDocument(Appointment_schedule,Appointment_scheduleFilter);

      let response = { Appointment_schedule : Appointment_scheduleCnt, };
      return response;
    } else {
      return {  appointment_slot : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countEvent = async (filter) =>{
  try {
        
    const EventCnt =  await Event.countDocuments(filter);
    return { Event : EventCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countBlog = async (filter) =>{
  try {
        
    const BlogCnt =  await Blog.countDocuments(filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMaster = async (filter) =>{
  try {
        
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);

      const MasterFilter = { '$or': [{ parentId : { '$in' : master } }] };
      const MasterCnt =  await dbService.countDocument(Master,MasterFilter);

      let response = { Master : MasterCnt, };
      return response;
    } else {
      return {  master : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
        
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const patientFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const patientCnt =  await dbService.countDocument(Patient,patientFilter);

      const orderItemFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const orderItemCnt =  await dbService.countDocument(OrderItem,orderItemFilter);

      const orderFilter = { '$or': [{ orderBy : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const orderCnt =  await dbService.countDocument(Order,orderFilter);

      const medicationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const medicationCnt =  await dbService.countDocument(Medication,medicationFilter);

      const noteFilter = { '$or': [{ provider : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const noteCnt =  await dbService.countDocument(Note,noteFilter);

      const encounterFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const encounterCnt =  await dbService.countDocument(Encounter,encounterFilter);

      const enterpriseFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const enterpriseCnt =  await dbService.countDocument(Enterprise,enterpriseFilter);

      const departmentsFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const departmentsCnt =  await dbService.countDocument(Departments,departmentsFilter);

      const CustomerFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const CustomerCnt =  await dbService.countDocument(Customer,CustomerFilter);

      const TaskFilter = { '$or': [{ completedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const TaskCnt =  await dbService.countDocument(Task,TaskFilter);

      const CommentFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const CommentCnt =  await dbService.countDocument(Comment,CommentFilter);

      const PlanFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const PlanCnt =  await dbService.countDocument(Plan,PlanFilter);

      const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_groupCnt =  await dbService.countDocument(Chat_group,Chat_groupFilter);

      const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_messageCnt =  await dbService.countDocument(Chat_message,Chat_messageFilter);

      const ToDoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const ToDoCnt =  await dbService.countDocument(ToDo,ToDoFilter);

      const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Appointment_scheduleCnt =  await dbService.countDocument(Appointment_schedule,Appointment_scheduleFilter);

      const Appointment_slotFilter = { '$or': [{ userId : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Appointment_slotCnt =  await dbService.countDocument(Appointment_slot,Appointment_slotFilter);

      const EventFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const EventCnt =  await dbService.countDocument(Event,EventFilter);

      const BlogFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const BlogCnt =  await dbService.countDocument(Blog,BlogFilter);

      const MasterFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const MasterCnt =  await dbService.countDocument(Master,MasterFilter);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userTokensCnt =  await dbService.countDocument(UserTokens,userTokensFilter);

      const roleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const roleCnt =  await dbService.countDocument(Role,roleFilter);

      const projectRouteFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const projectRouteCnt =  await dbService.countDocument(ProjectRoute,projectRouteFilter);

      const routeRoleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        patient : patientCnt,
        orderItem : orderItemCnt,
        order : orderCnt,
        medication : medicationCnt,
        note : noteCnt,
        encounter : encounterCnt,
        enterprise : enterpriseCnt,
        departments : departmentsCnt,
        Customer : CustomerCnt,
        Task : TaskCnt,
        Comment : CommentCnt,
        Plan : PlanCnt,
        Chat_group : Chat_groupCnt,
        Chat_message : Chat_messageCnt,
        ToDo : ToDoCnt,
        Appointment_schedule : Appointment_scheduleCnt,
        Appointment_slot : Appointment_slotCnt,
        Event : EventCnt,
        Blog : BlogCnt,
        Master : MasterCnt,
        user : userCnt,
        userTokens : userTokensCnt,
        role : roleCnt,
        projectRoute : projectRouteCnt,
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
        
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
        
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
        
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
        
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
        
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePatient = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);
      const orderFilter6405 = { 'patientId': { '$in': patient } };
      const order3560 = await softDeleteOrder(orderFilter6405, updateBody);
      return await Patient.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No patient found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrderItem = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await OrderItem.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrder = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Order.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMedication = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Medication.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteNote = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Note.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEncounter = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);
      const noteFilter6645 = { 'encounterId': { '$in': encounter } };
      const note7575 = await softDeleteNote(noteFilter6645, updateBody);
      return await Encounter.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No encounter found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEnterprise = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);
      const departmentsFilter6061 = { 'enterprises': { '$in': enterprise } };
      const departments5512 = await softDeleteDepartments(departmentsFilter6061, updateBody);
      return await Enterprise.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No enterprise found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteDepartments = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Departments.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCustomer = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Customer.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteTask = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Task.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteComment = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);
      const CommentFilter8455 = { 'parentItem': { '$in': comment } };
      const Comment3545 = await softDeleteComment(CommentFilter8455, updateBody);
      return await Comment.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Comment found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePlan = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Plan.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_group = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);
      const Chat_messageFilter6722 = { 'groupId': { '$in': chat_group } };
      const Chat_message0077 = await softDeleteChat_message(Chat_messageFilter6722, updateBody);
      return await Chat_group.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Chat_group found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_message = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Chat_message.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteToDo = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await ToDo.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAppointment_schedule = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Appointment_schedule.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAppointment_slot = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);
      const Appointment_scheduleFilter9378 = { 'slot': { '$in': appointment_slot } };
      const Appointment_schedule9049 = await softDeleteAppointment_schedule(Appointment_scheduleFilter9378, updateBody);
      return await Appointment_slot.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Appointment_slot found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEvent = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Event.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBlog = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Blog.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMaster = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);
      const MasterFilter8637 = { 'parentId': { '$in': master } };
      const Master3308 = await softDeleteMaster(MasterFilter8637, updateBody);
      return await Master.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const patientFilter3117 = { 'addedBy': { '$in': user } };
      const patient2489 = await softDeletePatient(patientFilter3117, updateBody);
      const patientFilter9330 = { 'updatedBy': { '$in': user } };
      const patient9409 = await softDeletePatient(patientFilter9330, updateBody);
      const orderItemFilter0734 = { 'addedBy': { '$in': user } };
      const orderItem9287 = await softDeleteOrderItem(orderItemFilter0734, updateBody);
      const orderItemFilter3625 = { 'updatedBy': { '$in': user } };
      const orderItem6181 = await softDeleteOrderItem(orderItemFilter3625, updateBody);
      const orderFilter7552 = { 'orderBy': { '$in': user } };
      const order7542 = await softDeleteOrder(orderFilter7552, updateBody);
      const orderFilter6438 = { 'addedBy': { '$in': user } };
      const order9475 = await softDeleteOrder(orderFilter6438, updateBody);
      const orderFilter6245 = { 'updatedBy': { '$in': user } };
      const order8785 = await softDeleteOrder(orderFilter6245, updateBody);
      const medicationFilter2622 = { 'addedBy': { '$in': user } };
      const medication5048 = await softDeleteMedication(medicationFilter2622, updateBody);
      const medicationFilter3218 = { 'updatedBy': { '$in': user } };
      const medication0018 = await softDeleteMedication(medicationFilter3218, updateBody);
      const noteFilter0687 = { 'provider': { '$in': user } };
      const note1779 = await softDeleteNote(noteFilter0687, updateBody);
      const noteFilter9593 = { 'addedBy': { '$in': user } };
      const note1541 = await softDeleteNote(noteFilter9593, updateBody);
      const noteFilter9466 = { 'updatedBy': { '$in': user } };
      const note0974 = await softDeleteNote(noteFilter9466, updateBody);
      const encounterFilter0387 = { 'addedBy': { '$in': user } };
      const encounter4223 = await softDeleteEncounter(encounterFilter0387, updateBody);
      const encounterFilter3758 = { 'updatedBy': { '$in': user } };
      const encounter6566 = await softDeleteEncounter(encounterFilter3758, updateBody);
      const enterpriseFilter7864 = { 'addedBy': { '$in': user } };
      const enterprise2455 = await softDeleteEnterprise(enterpriseFilter7864, updateBody);
      const enterpriseFilter6110 = { 'updatedBy': { '$in': user } };
      const enterprise3267 = await softDeleteEnterprise(enterpriseFilter6110, updateBody);
      const departmentsFilter4656 = { 'addedBy': { '$in': user } };
      const departments3219 = await softDeleteDepartments(departmentsFilter4656, updateBody);
      const departmentsFilter0687 = { 'updatedBy': { '$in': user } };
      const departments7586 = await softDeleteDepartments(departmentsFilter0687, updateBody);
      const CustomerFilter8221 = { 'addedBy': { '$in': user } };
      const Customer3448 = await softDeleteCustomer(CustomerFilter8221, updateBody);
      const CustomerFilter5356 = { 'updatedBy': { '$in': user } };
      const Customer6999 = await softDeleteCustomer(CustomerFilter5356, updateBody);
      const TaskFilter8999 = { 'completedBy': { '$in': user } };
      const Task8184 = await softDeleteTask(TaskFilter8999, updateBody);
      const TaskFilter8920 = { 'updatedBy': { '$in': user } };
      const Task3700 = await softDeleteTask(TaskFilter8920, updateBody);
      const TaskFilter9280 = { 'addedBy': { '$in': user } };
      const Task3033 = await softDeleteTask(TaskFilter9280, updateBody);
      const CommentFilter4236 = { 'updatedBy': { '$in': user } };
      const Comment7845 = await softDeleteComment(CommentFilter4236, updateBody);
      const CommentFilter8993 = { 'addedBy': { '$in': user } };
      const Comment2251 = await softDeleteComment(CommentFilter8993, updateBody);
      const PlanFilter3337 = { 'updatedBy': { '$in': user } };
      const Plan8624 = await softDeletePlan(PlanFilter3337, updateBody);
      const PlanFilter7781 = { 'addedBy': { '$in': user } };
      const Plan4723 = await softDeletePlan(PlanFilter7781, updateBody);
      const Chat_groupFilter3647 = { 'updatedBy': { '$in': user } };
      const Chat_group6568 = await softDeleteChat_group(Chat_groupFilter3647, updateBody);
      const Chat_groupFilter8349 = { 'addedBy': { '$in': user } };
      const Chat_group2265 = await softDeleteChat_group(Chat_groupFilter8349, updateBody);
      const Chat_messageFilter7958 = { 'updatedBy': { '$in': user } };
      const Chat_message3594 = await softDeleteChat_message(Chat_messageFilter7958, updateBody);
      const Chat_messageFilter9270 = { 'addedBy': { '$in': user } };
      const Chat_message3233 = await softDeleteChat_message(Chat_messageFilter9270, updateBody);
      const ToDoFilter2095 = { 'addedBy': { '$in': user } };
      const ToDo9095 = await softDeleteToDo(ToDoFilter2095, updateBody);
      const ToDoFilter8946 = { 'updatedBy': { '$in': user } };
      const ToDo0499 = await softDeleteToDo(ToDoFilter8946, updateBody);
      const Appointment_scheduleFilter4451 = { 'host': { '$in': user } };
      const Appointment_schedule1374 = await softDeleteAppointment_schedule(Appointment_scheduleFilter4451, updateBody);
      const Appointment_scheduleFilter7438 = { 'updatedBy': { '$in': user } };
      const Appointment_schedule8229 = await softDeleteAppointment_schedule(Appointment_scheduleFilter7438, updateBody);
      const Appointment_scheduleFilter7559 = { 'addedBy': { '$in': user } };
      const Appointment_schedule8962 = await softDeleteAppointment_schedule(Appointment_scheduleFilter7559, updateBody);
      const Appointment_slotFilter8214 = { 'userId': { '$in': user } };
      const Appointment_slot8696 = await softDeleteAppointment_slot(Appointment_slotFilter8214, updateBody);
      const Appointment_slotFilter8016 = { 'updatedBy': { '$in': user } };
      const Appointment_slot3279 = await softDeleteAppointment_slot(Appointment_slotFilter8016, updateBody);
      const Appointment_slotFilter8465 = { 'addedBy': { '$in': user } };
      const Appointment_slot3133 = await softDeleteAppointment_slot(Appointment_slotFilter8465, updateBody);
      const EventFilter5390 = { 'updatedBy': { '$in': user } };
      const Event3764 = await softDeleteEvent(EventFilter5390, updateBody);
      const EventFilter0813 = { 'addedBy': { '$in': user } };
      const Event9895 = await softDeleteEvent(EventFilter0813, updateBody);
      const BlogFilter9783 = { 'updatedBy': { '$in': user } };
      const Blog1237 = await softDeleteBlog(BlogFilter9783, updateBody);
      const BlogFilter2341 = { 'addedBy': { '$in': user } };
      const Blog6388 = await softDeleteBlog(BlogFilter2341, updateBody);
      const MasterFilter2305 = { 'updatedBy': { '$in': user } };
      const Master5298 = await softDeleteMaster(MasterFilter2305, updateBody);
      const MasterFilter8288 = { 'addedBy': { '$in': user } };
      const Master5454 = await softDeleteMaster(MasterFilter8288, updateBody);
      const userFilter6937 = { 'addedBy': { '$in': user } };
      const user1568 = await softDeleteUser(userFilter6937, updateBody);
      const userFilter7338 = { 'updatedBy': { '$in': user } };
      const user7051 = await softDeleteUser(userFilter7338, updateBody);
      const userTokensFilter8154 = { 'userId': { '$in': user } };
      const userTokens7981 = await softDeleteUserTokens(userTokensFilter8154, updateBody);
      const userTokensFilter3083 = { 'addedBy': { '$in': user } };
      const userTokens0962 = await softDeleteUserTokens(userTokensFilter3083, updateBody);
      const userTokensFilter9367 = { 'updatedBy': { '$in': user } };
      const userTokens3359 = await softDeleteUserTokens(userTokensFilter9367, updateBody);
      const roleFilter6680 = { 'addedBy': { '$in': user } };
      const role0965 = await softDeleteRole(roleFilter6680, updateBody);
      const roleFilter5833 = { 'updatedBy': { '$in': user } };
      const role6942 = await softDeleteRole(roleFilter5833, updateBody);
      const projectRouteFilter3741 = { 'addedBy': { '$in': user } };
      const projectRoute1086 = await softDeleteProjectRoute(projectRouteFilter3741, updateBody);
      const projectRouteFilter9622 = { 'updatedBy': { '$in': user } };
      const projectRoute8401 = await softDeleteProjectRoute(projectRouteFilter9622, updateBody);
      const routeRoleFilter7764 = { 'addedBy': { '$in': user } };
      const routeRole1946 = await softDeleteRouteRole(routeRoleFilter7764, updateBody);
      const routeRoleFilter7990 = { 'updatedBy': { '$in': user } };
      const routeRole4273 = await softDeleteRouteRole(routeRoleFilter7990, updateBody);
      const userRoleFilter6935 = { 'userId': { '$in': user } };
      const userRole5997 = await softDeleteUserRole(userRoleFilter6935, updateBody);
      const userRoleFilter4329 = { 'addedBy': { '$in': user } };
      const userRole0372 = await softDeleteUserRole(userRoleFilter4329, updateBody);
      const userRoleFilter1063 = { 'updatedBy': { '$in': user } };
      const userRole5429 = await softDeleteUserRole(userRoleFilter1063, updateBody);
      return await User.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserTokens.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter4037 = { 'roleId': { '$in': role } };
      const routeRole3944 = await softDeleteRouteRole(routeRoleFilter4037, updateBody);
      const userRoleFilter6874 = { 'roleId': { '$in': role } };
      const userRole4923 = await softDeleteUserRole(userRoleFilter6874, updateBody);
      return await Role.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter7609 = { 'routeId': { '$in': projectroute } };
      const routeRole9616 = await softDeleteRouteRole(routeRoleFilter7609, updateBody);
      return await ProjectRoute.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await RouteRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deletePatient,
  deleteOrderItem,
  deleteOrder,
  deleteMedication,
  deleteNote,
  deleteEncounter,
  deleteEnterprise,
  deleteDepartments,
  deleteCustomer,
  deleteTask,
  deleteComment,
  deletePlan,
  deleteChat_group,
  deleteChat_message,
  deleteToDo,
  deleteAppointment_schedule,
  deleteAppointment_slot,
  deleteEvent,
  deleteBlog,
  deleteMaster,
  deleteUser,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countPatient,
  countOrderItem,
  countOrder,
  countMedication,
  countNote,
  countEncounter,
  countEnterprise,
  countDepartments,
  countCustomer,
  countTask,
  countComment,
  countPlan,
  countChat_group,
  countChat_message,
  countToDo,
  countAppointment_schedule,
  countAppointment_slot,
  countEvent,
  countBlog,
  countMaster,
  countUser,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeletePatient,
  softDeleteOrderItem,
  softDeleteOrder,
  softDeleteMedication,
  softDeleteNote,
  softDeleteEncounter,
  softDeleteEnterprise,
  softDeleteDepartments,
  softDeleteCustomer,
  softDeleteTask,
  softDeleteComment,
  softDeletePlan,
  softDeleteChat_group,
  softDeleteChat_message,
  softDeleteToDo,
  softDeleteAppointment_schedule,
  softDeleteAppointment_slot,
  softDeleteEvent,
  softDeleteBlog,
  softDeleteMaster,
  softDeleteUser,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
