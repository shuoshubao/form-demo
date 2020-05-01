<template>
    <div>
        <mtd-form ref="form" :model="formModel" :rules="formRules">
            <mtd-form-item label="姓名" prop="name">
                <mtd-input v-model="formModel.name" />
            </mtd-form-item>
            <mtd-form-item label="年龄" prop="age">
                <mtd-input v-model="formModel.age" :controls="false" />
            </mtd-form-item>
            <mtd-form-item label="职业" prop="job">
                <dmc-select v-model="formModel.job" :data="jobEnum" size="" />
            </mtd-form-item>
            <mtd-form-item>
                <mtd-button type="primary" @click="handleSubmit">提交</mtd-button>
            </mtd-form-item>
        </mtd-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator';
import { rules, pifyValidate } from '@datafe/tools';

const { required, selectRequired } = rules;

@Component
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
        this.$mtd.message({ type: 'info', message: `校验结果: ${validate}` });
    }
}
</script>
