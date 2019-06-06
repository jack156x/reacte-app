<template>
    <div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="当前密码：" class="control-group">
                    <el-input v-model="ruleForm.currentPass" class="input input-money" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="newpass" class="control-group">
                    <el-input type="password" v-model="ruleForm.newpass" placeholder="请输入密码" @input="checkIntensity" class="input input-money" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码强度：" prop="checkPass" class="control-group"> 
                 <div class="col-xs-8 p-x controls">
                    <em class="passafe" :class="{ lovercase_valid: contains_lovercase}"></em>
                    <em class="passafe" :class="{ number_valid: contains_number}"></em>
                    <em class="passafe" :class="{ uppercase_valid: contains_uppercase }"></em>
                </div>
            </el-form-item>
            <el-form-item label="确认密码：" prop="enterPass" class="control-group">
                    <el-input v-model.number="ruleForm.enterPass" placeholder="请输入密码" class="input input-money"></el-input>
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
    name:'editpassword',
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入当前密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatenewpass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      const aginpassword = (rule, value, callback) => {
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
          newpass: '',
          checkPass: '',
          enterPass: '',
          currentPass:''
        },
        password_length: 0,
        typed: false,
        contains_lovercase: false,
        contains_number: false,
        contains_uppercase: false,
        valid_password_length: false,
        valid_password: false,
        rules: {
          newpass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatenewpass, trigger: 'blur' }
          ],
          enterPass: [
            { validator: aginpassword, trigger: 'blur' }
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
            this.$logger.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      checkIntensity: function() {
      this.password_length = this.ruleForm.pass.length;
      if (this.password_length > 7) {
        this.valid_password_length = true;
      } else {
        this.valid_password_length = false;
      }

      if (this.password_length > 0) {
        this.typed = true;
      } else {
        this.typed = false;
      }
      this.contains_lovercase = /[a-z]/.test(this.ruleForm.pass);
      this.contains_number = /\d/.test(this.ruleForm.pass);
      this.contains_uppercase = /[A-Z]/.test(this.ruleForm.pass);
      if (this.contains_lovercase == true && this.contains_number == true) {
        this.valid_password = false;
        if (
          this.contains_uppercase == true &&
          this.valid_password_length == true
        )
          this.valid_password = true;
      } else {

          this.valid_password = false;

      }
    }
    }
    }
</script>

<style scoped>
.change-password-wrap {
    width: 100%;
    margin: 0;
}
.change-password-wrap .change-link-wrap {
    text-align: center;
    word-spacing: -4px;
    margin: 0 0 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}
.change-password-wrap .change-link-wrap .change-link.active {
    background: #3b82f7;
    border: 1px solid #3b82f7;
    color: #fff;
}
.change-password-wrap .control-group {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.change-password-wrap .control-group {
    width: 550px;
    margin-left: auto;
    margin-right: auto;
}
.control-group {
    margin-bottom: 15px;
    display: block;
}
.change-password-wrap .control-group .controls {
    max-width: 430px;
}
.control-group .controls {
    vertical-align: middle;
    padding-top: 5px;
    position: relative;
    float: left;
    max-width: 800px;
}
.passafe {
    background: #e8ecef;
    border-radius: 15px;
    width: 50px;
    height: 11px;
    display: inline-block;
    margin-right: 5px;
}
.lovercase_valid,.number_valid,.uppercase_valid{
    background: #2772ee;
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
.btn {
    margin-bottom: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
}
.btn-blue {
    background: #2772ee!important;
    color: #fff!important;
}
.change-password-wrap .change-btn {
    text-align: center;
}
.change-password-wrap .change-btn .btn-link {
    border: 0;
    color: #3b82f7;
    background: 0;
}
</style>