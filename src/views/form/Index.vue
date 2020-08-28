<template>
    <div>
        <el-form ref="form" :model="formModel" :rules="formRules">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="formModel.name" />
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="formModel.age" :controls="false" />
            </el-form-item>
            <el-form-item label="职业" prop="job">
                <el-select v-model="formModel.job">
                    <el-option v-for="(item, index) in jobEnum" :key="index" :value="item.value">
                        {{ item.label }}
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { rules, pifyValidate } from '@nbfe/tools';

const { required, selectRequired } = rules;

@Component({})
export default class App extends Vue {
    @Ref('form') readonly form!: any;

    // 表单数据
    formModel = {
        name: '',
        age: '',
        job: ''
    };

    // 校验规则
    formRules = {
        name: [required()],
        age: [required()],
        job: [selectRequired()]
    };

    // 枚举: 职位
    jobEnum = [
        { value: 'fe', label: 'FE' },
        { value: 'java', label: 'Java' },
        { value: 'qa', label: 'QA' }
    ];

    // 校验
    async handleValidate() {
        this.form.clearValidate();
        return await pifyValidate(this.form.validate);
    }

    // 提交
    async handleSubmit() {
        const validate = await this.handleValidate();
        this.$message({ type: 'info', message: `校验结果: ${validate}` });
    }
}
</script>
