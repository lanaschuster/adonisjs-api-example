import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('title').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.text('content', 'longtext').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
