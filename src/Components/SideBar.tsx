import AddTodoForm from './netedComponents/AddTodoForm';
import Button from './Button';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

function SideBar() {
  const {login, register, isAuthenticated, isLoading , user, logout} = useKindeAuth()
  return (
    <section className="flex flex-col  col-[2/3] row-[2/3] bg-[#efd8bda9] border-l border-black/[0.08] px-6 pt-4 pb-7">
      <AddTodoForm  />
      <div className="mt-auto space-y-2">
        {
          isLoading ? null : isAuthenticated ? (
            <>
            <p className='text-sm'>{user?.email}</p>
            <Button onClick={logout} buttonType='secondary'>Logged out</Button>
            </>
          ) : (
            <>
            <Button onClick={login} buttonType="secondary">Login</Button>
            <Button onClick={register} buttonType="secondary">Register</Button>
            </>
          )
        }
      </div>
    </section>
  );
}

export default SideBar;
