class Controller{
    constructor(){
    };

    error(message , status=500){
        let error = new Error(message);
        error.status = status
        console.log(error)
        throw error;
    }
};

module.exports = Controller ;

