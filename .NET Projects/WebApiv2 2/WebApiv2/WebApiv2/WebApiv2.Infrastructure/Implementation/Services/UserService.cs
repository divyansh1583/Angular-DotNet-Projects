using WebApiv2.Application.Interfaces;
using WebApiv2.Domain.Entities;
using WebApiv2.Shared.Models;

namespace WebApiv2.Infrastructure.Implementation.Services
{
    public class UserService : IUserService
    {
        private readonly IRepository _repository;
        private readonly IGenericRepository<User> _genericRepository;
        public UserService(IRepository repository, IGenericRepository<User> genericRepository)
        {
            _repository = repository;
            _genericRepository = genericRepository;
        }
        public void AddUser(UserInfoDto userInfo)
        {
            var user = new User() { EmailAddress = userInfo.EmailAddress, Name = userInfo.Name };
            //_repository.Insert(user);
            _genericRepository.Insert(user);
        }

        public int GetUserId()
        {
            throw new NotImplementedException();
        }
    }
}
