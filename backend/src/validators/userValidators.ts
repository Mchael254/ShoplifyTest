import joi from 'joi'

//register validation
export const userRegisterValidationSchema = joi.object({
    userName:joi.string().required().min(2).max(30),
    email:joi.string().email({
        minDomainSegments:2,tlds : {
            allow :['ke','com']

        }
    }),
    phone_no:joi.string().required().min(10).max(10),
    password:joi.string().required().pattern(
        new RegExp ('^[a-zA-Z0-9!@#%$&*()]{0,30}$')
    )

});

//Login validation
export const userLoginValidationSchema = joi.object({
    email:joi.string().email({
        minDomainSegments:2,tlds : {
            allow :['ke','com']

        }
    }),
    password:joi.string().required().pattern(
        new RegExp ('^[a-zA-Z0-9!@#%$&*()]{0,30}$')
    )

});

//profile update validation

export const profileUpdateValidationSchema = joi.object({

    email:joi.string().email({
        minDomainSegments:2,tlds : {
            allow :['ke','com']

        }
    }),
    password:joi.string().required().pattern(
        new RegExp ('^[a-zA-Z0-9!@#%$&*()]{0,30}$')
    ),
    userName:joi.string().required().min(2).max(30),
    phone_no:joi.string().required().min(10).max(10),
    

});

//password reset request validation
export const passwordResetRequestValidationSchema = joi.object({
    email:joi.string().email({
        minDomainSegments:2,tlds : {
            allow :['ke','com']

        }
    }),

});

//password reset validation
export const passwordResetValidationSchema = joi.object({
    email:joi.string().email({
        minDomainSegments:2,tlds : {
            allow :['ke','com']

        }
    }),
    newPassword:joi.string().required().pattern(
        new RegExp ('^[a-zA-Z0-9!@#%$&*()]{0,30}$')
    ),
    token:joi.string().required().min(2).max(300),

});