import { Sequelize} from 'sequelize';

export const sequelize = new Sequelize('ums', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
export const connectDb=()=>{
    sequelize.sync()
    .then(()=>{ //mean if connection is done
        console.log("database connection succesfully");
    
    }).catch((error)=>{ // if connection have someting wrong
        console.log("error in connection to database :"+ error);
    
    });
};
