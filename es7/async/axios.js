let axios = require('axios');
let token = 'EAASyaSXtgt0BAKe7Sq1VZAA5ZA8WAx1lzBeQrrx6l96AlzpbmIdNgRvx0yUQZCuE1OOwzmeUZB94kqnd469yvHVMWBjsZCart2BZAW5jzKuod7Cc77XwfBh7PtIG6wXkovoXLNEGQffWML3x49NgEiNz67jtMKZAnV5wrKzygNOQneZCm1KjW3HQV4cnyzmWRdYZD';
async function doit(){
  let res;
  try{
     res = await axios.get("https://graph.facbook.com/me?fields=id,name,email,first_name,gender,last_name,locale,age_range&access_token="+token);
  } catch(err) {
    console.log("err:",err.Error);
  }
  //profile.then((res)=>console.log(res.data));
  console.log(res);
}
doit();