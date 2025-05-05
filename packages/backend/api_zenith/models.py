import uuid
from datetime import datetime
from sqlalchemy import Column, String, Float, Integer, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class BaseModel(Base):
    __abstract__ = True
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class User(BaseModel):
    __tablename__ = 'users'
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    def to_dict(self):
        return {
            'id': str(self.id),
            'email': self.email,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

class Product(BaseModel):
    __tablename__ = 'products'
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    inventory_count = Column(Integer, nullable=False)

    def to_dict(self):
        return {
            'id': str(self.id),
            'name': self.name,
            'price': self.price,
            'inventory_count': self.inventory_count,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }
