import React from 'react'
import { useDateFormat } from '../hooks/useDateFormat'
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

const CheckOutComponent = ({ total, pagar }) => {

  const DateFormat = ({ compraDate }) => {
    const { dateFormat } = useDateFormat(compraDate)
    return (dateFormat);
  }

  return (
    <div className="container">
      <div className="row my-5">
        <Card>
          <CardBody>
            <CardTitle><h5><strong>Fecha de Compra: <DateFormat compraDate={new Date()} /></strong></h5></CardTitle>
            <CardText>Valor total: ${total} </CardText>
            <button className="btn btn-success" onClick={() => pagar()}>Pagar</button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default CheckOutComponent
