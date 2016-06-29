# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160627163633) do

  create_table "profiles", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "terminals", force: :cascade do |t|
    t.string   "terminalinput",  limit: 255
    t.string   "terminaloutput", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "",             null: false
    t.string   "encrypted_password",     limit: 255, default: "",             null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                      default: 0,              null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "img",                    limit: 255
    t.string   "username",               limit: 255
    t.text     "schedule",                           default: ""
    t.string   "mission",                limit: 255, default: ""
    t.string   "target",                 limit: 255, default: "hot girl"
    t.string   "command1",                           default: "gc command1"
    t.string   "response1",                          default: "response1"
    t.string   "command2",                           default: "gc command2"
    t.string   "response2",                          default: "response2"
    t.string   "command3",                           default: "gc command3"
    t.string   "response3",                          default: "response3"
    t.string   "command4",                           default: "gc command4"
    t.string   "response4",                          default: "response4"
    t.string   "command5",                           default: "gc command5"
    t.string   "response5",                          default: "response5"
    t.string   "command6",                           default: "gc command6"
    t.string   "response6",                          default: "response6"
    t.string   "command7",                           default: "gc command7"
    t.string   "response7",                          default: "response7"
    t.string   "command8",                           default: "gc command8"
    t.string   "response8",                          default: "response8"
    t.string   "command9",                           default: "gc command9"
    t.text     "response9",                          default: "response9"
    t.string   "command10",                          default: "gc command10"
    t.text     "response10",                         default: "response10"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
