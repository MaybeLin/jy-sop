<template>
    <div>
        <plan-form class="page-w block-mg block-center"></plan-form>
        <plan-list class="page-w block-mg block-center"></plan-list>
    </div>
</template>

<script>
    import PlanForm from './components/form';
    import PlanList from './components/plan-list';
    export default {
        name: "money-plan",
        components:{
            PlanForm,
            PlanList
        }
    }
</script>

<style scoped>

</style>