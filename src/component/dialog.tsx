import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        <Typography variant="body1" color="var(--foreground)">작은 기록장</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"잠시만요!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            이 페이지는 API를 사용해요. 최대 요청 수가 있으니 여러번 입장하거나 새로고침을 여러번 하는 행위는 자제해주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={handleClose} autoFocus>취소</Button>
          <Button href="https://moffu.me/blog">
            이동하기
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}