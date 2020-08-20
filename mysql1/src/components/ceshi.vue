<template>
    <div> 
        <!--element-ui table 自定义列模板 -->
        <el-table
            :data="books"
            border
            style="width: 100%,height: 100%">
            <el-table-column
                label="编号"
                width="50">
                <template slot-scope="scope">
                    <!-- {{scope.$index}} // 0 1 2 3 -->
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="作者"
                width="50">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.author }}</span>
                </template>
                </el-table-column>
            <el-table-column
                label="姓名"
                class="commonStyle"
                width="100">
                <template slot-scope="scope">
                    <span class="commonStyle" style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="分类"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.category }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="描述"
                width="200">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.description }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        books: [
            {
                id: 1,
                name: '三国演义',
                author: 'sd',
                category: 'rjfg',
                description: 'sdgdfdffd'
            },
            {
                id: 2,
                name: '水浒传',
                author: 'sd',
                category: 'rjfg',
                description: 'sdgdfdffd'
            },
            {
                id: 3,
                name: '红楼梦',
                author: 'sd',
                category: 'rjfg',
                description: 'sdgdfdffd'
            },
            {
                id: 4,
                name: '西游记',
                author: 'sd',
                category: 'rjfg',
                description: 'sdgdfdffd'
            }
        ]
      }
    },
    methods: {
      handleEdit(id, row) {
        console.log(id, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
<style lang="" scoped>
.el-table th .cell{
   text-align: center !important;
}

</style>