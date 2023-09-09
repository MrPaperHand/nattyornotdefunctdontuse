const Notification = ({ message }) => {

    var notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }

    if (message === null) {
      return null
    }

    if(message === 'Wrong credentials') {
      notificationStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
    }
  
    return (
      <div className='success' style={notificationStyle}>
        {message}
      </div>
    )
  }

export default Notification