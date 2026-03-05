import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressBar({value,height}: {value: number,height?:number}) {

    const getColor = (value: number) => {
        if (value <= 10) {
            return '#797777fd';
        } else if (value <= 20) {
            return '#730fe6ff';
        } else if(value <= 30) {
            return '#1f4bdbff';
        }else if(value <= 45) {
            return '#137a69ff';
        }else if(value <= 65) {
            return '#057f8fff';
        }else if(value <= 85) {
            return '#36df9eff';
        }else{
            return '#21cc4cff';
        }
    }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={value}  
            sx={{
                height:height?height:8,
                borderRadius:2,
                backgroundColor: '#eee',
                '& .MuiLinearProgress-bar': {
                    backgroundColor: getColor(value),
                    borderRadius: 10,
                },
            }} 
            color='warning'
        />
      </Box>
      <Box sx={{ minWidth: 35, }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary',fontWeight:600 }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

