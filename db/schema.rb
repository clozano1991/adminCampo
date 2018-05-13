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

ActiveRecord::Schema.define(version: 20180511031401) do

  create_table "campos", force: :cascade do |t|
    t.string "nombre"
    t.string "propietario"
    t.string "direccion"
    t.text "comentarios"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "recordatorio"
    t.text "urlImagenBloqueUno"
    t.text "urlImagenBloqueDos"
    t.text "urlImagenBloqueTres"
    t.index ["user_id"], name: "index_campos_on_user_id"
  end

  create_table "empleados", force: :cascade do |t|
    t.string "nombre"
    t.string "direccion"
    t.string "telefonoContacto"
    t.string "telefonoEmergencia"
    t.integer "sueldoBase"
    t.string "afpAcogida"
    t.integer "campo_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "apellidos"
    t.string "rut"
    t.text "resumenPersona"
    t.text "resumenCargo"
    t.string "cargo"
    t.string "tipoContrato"
    t.string "nivelEducacion"
    t.string "manejoTecnologia"
    t.text "antecedentesLaborales"
    t.string "otrasHabilidades"
    t.string "porcentajeCotizacionAFP"
    t.string "isapreAcogida"
    t.string "porcentajeCotizacionIsapre"
    t.string "banco"
    t.string "tipoCuentaBanco"
    t.string "numeroCuentaBanco"
    t.string "emailEmpleado"
    t.date "fechaContratacion"
    t.date "fechaDesvinculacion"
    t.index ["campo_id"], name: "index_empleados_on_campo_id"
  end

  create_table "huertos", force: :cascade do |t|
    t.integer "campo_id"
    t.string "nombre"
    t.string "clase"
    t.text "coordenadas"
    t.string "cultivo"
    t.text "variedades"
    t.text "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "bloqueMapa"
    t.index ["campo_id"], name: "index_huertos_on_campo_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
