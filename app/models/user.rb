class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  def self.search(input, id)
    return nil if input == ""
    User.where(['name LIKE ?', "%#{input}%"] ).where.not(id: id).limit(10)
  end


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable,  :validatable
  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users
end