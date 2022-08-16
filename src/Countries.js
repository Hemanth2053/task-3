import React from 'react'

function Countries({value, name, onChange}) {
  return (
    <div>
        <select className="inputContainer"  value={value} name={name} onChange={onChange}>
            <option className="optionContainer">Australia</option>
            <option>Austria</option>
            <option>Belgium</option>
            <option>Canada</option>
            <option>Denmark</option>
            <option>Estonia</option>
            <option>Finland</option>
            <option>France</option>
            <option>Germany</option>
            <option>Greece</option>
            <option>Hong Kong</option>
            <option>India</option>
            <option>Ireland</option>
            <option>Italy</option>
            <option>Japan</option>
            <option>Latvia</option>
            <option>Lithunia</option>
            <option>Luxembourg</option>
            <option>Mexico</option>
            <option>Netherland</option>
            <option>New Zealand</option>
            <option>Norway</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Singapore</option>
            <option>Slovakia</option>
            <option>Slovenia</option>
            <option>Spain</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>United Kingdom</option>
            <option>United States</option>
        </select>
    </div>
  )
}

export default Countries