import Swal from "sweetalert2"


const show= ()=>{
    Swal.fire({
        title: 'حذف کاربر',
        text: "از حذف کاربر مطمئن هستید ؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'بیخیال',
        confirmButtonText: 'بله مطمئن هستم'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'انجام شد !',
            'کاربر مورد نظر حذف شد',
            'success'
          )
        }
      })
}


const Users = ()=>{
return(
    <div className="col-9" style={{marginTop : 70}}>users
    <button onClick={show}>Show</button></div>
)
}

export default Users