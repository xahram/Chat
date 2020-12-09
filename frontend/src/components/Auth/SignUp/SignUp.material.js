import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            '& > *': {
                width: "50%",
            },
        
            "& label.MuiInputLabel-animated": {
            },
            "& div  div  input": {
                backgroundColor: "white",
                zIndex: -1

            },


        },

        inputField: {
            // backgroundColor: "white"
        }
    }
})

export default useStyles;