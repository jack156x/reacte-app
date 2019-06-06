<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="真实姓名：" class="control-group">
                    <el-input v-model="ruleForm.pass" class="input input-money" placeholder="请验证真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="当前密码：" prop="pass" class="control-group">
                    <el-input type="password" v-model="ruleForm.pass" class="input input-money" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="checkPass" class="control-group"> 
                     <el-input type="password" v-model="ruleForm.checkPass" class="input input-money" autocomplete="off" placeholder="请输入密码"></el-input>
                
            </el-form-item>
            <el-form-item label="确认密码：" prop="age" class="control-group">
                    <el-input v-model.number="ruleForm.age" class="input input-money" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="change-btn">
                <el-button class="btn-blue btn" type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <div class="change-btn">
                    <router-link to="/" class="large-big btn btn-link">忘记安全密码？</router-link>
                </div>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
    export default {
    name:'editsavepassword',
    data() {
      const checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.change-password-wrap .control-group {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.change-password-wrap .control-group .control-label {
    padding-top: 12px;
}
.control-group{
    vertical-align: middle;
    padding-top: 15px;
    position: relative;
    min-width: 280px;
}
.change-password-wrap .control-group input {
    margin-bottom: 0;
    width: 280px;
}
.change-password-wrap .control-group input {
    margin-bottom: 0;
    width: 280px;
    height: 35px;
}
.input {
    background: #fff;
    margin-right: 5px;
}
.change-password-wrap .change-btn {
    text-align: center;
}
.change-password-wrap .change-btn .btn {
    margin-left: auto;
    margin-right: auto;
    width: 150px;
}
.btn {
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
}
.change-password-wrap .change-btn {
    text-align: center;
}
.change-password-wrap .change-btn .btn-link {
    border: 0;
    color: #3b82f7;
    background: 0;
}
.change-password-wrap .change-btn .btn {
    margin-left: auto;
    margin-right: auto;
    width: 150px;
}
.large-big {
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 3px;
    text-align: center;
    font-family: "Microsoft YaHei";
    font-size: 16px;
}
</style>